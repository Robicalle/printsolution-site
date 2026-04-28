#!/usr/bin/env python3
"""
Script di migrazione blog TSX -> Sanity PortableText
Estrae contenuto IT e EN dai file TSX hardcoded e genera blog_migration_data.json
"""

import re
import json
import html as html_module
from pathlib import Path

BLOG_BASE = Path(r"C:\Users\Jarvis\.openclaw\workspace\website\src\app\[locale]\blog")

SLUG_TO_ID = {
    "automatizzare-produzione-scatole":       "blog-automatizzare-produzione-scatole",
    "box-maker-produzione-automatica-scatole": "blog-box-maker-produzione-automatica-scatole",
    "come-ridurre-costi-packaging":            "blog-come-ridurre-costi-packaging",
    "come-scegliere-stampante-etichette-colori": "blog-come-scegliere-stampante-etichette-colori",
    "etichette-adesive-materiali-finiture":   "blog-etichette-adesive-materiali-finiture",
    "hot-foil-stamping-cose-quando-usarlo":   "blog-hot-foil-stamping-cose-quando-usarlo",
    "packaging-personalizzato-vantaggi-pmi":  "blog-packaging-personalizzato-vantaggi-pmi",
    "stampa-cartone-ondulato-guida-completa": "blog-stampa-cartone-ondulato-guida-completa",
    "stampa-digitale-cartone-ondulato-vs-flessografia": "blog-stampa-digitale-cartone-ondulato-vs-flessografia",
    "stampa-digitale-vs-offset-piccoli-lotti": "blog-stampa-digitale-vs-offset-piccoli-lotti",
    "stampante-etichette-colori-bobina-guida": "blog-stampante-etichette-colori-bobina-guida",
    "stampante-inkjet-industriale-come-scegliere": "blog-stampante-inkjet-industriale-come-scegliere",
    "tendenze-packaging-2026":                "blog-tendenze-packaging-2026",
}

_key_counter = [0]


def gen_key(prefix="k"):
    _key_counter[0] += 1
    return f"{prefix}{_key_counter[0]}"


def unescape(text):
    """Converte entita HTML/JSX in testo normale."""
    text = text.replace("&apos;", "’")  # apostrofo tipografico
    text = text.replace("&amp;", "&")
    text = text.replace("&gt;", ">")
    text = text.replace("&lt;", "<")
    text = text.replace("&quot;", '"')
    text = text.replace("&#39;", "'")
    text = html_module.unescape(text)
    return text.strip()


def remove_jsx_fragments(text):
    """Rimuove <> e </> di JSX."""
    text = re.sub(r'^\s*<>\s*', '', text)
    text = re.sub(r'\s*</>\s*$', '', text)
    return text.strip()


def extract_ternary(full_text):
    """
    Dato un testo che inizia con {locale === 'it' ? ... : ...}
    oppure direttamente il contenuto dopo il '?',
    estrae (it_text, en_text).

    Usa bilanciamento di: {} () <> per trovare il ':' divisore corretto.
    """
    text = full_text.strip()

    # Rimuovi { wrapper se presente
    if text.startswith('{'):
        # Trova il } corrispondente
        depth = 0
        end_brace = -1
        for i, c in enumerate(text):
            if c == '{':
                depth += 1
            elif c == '}':
                depth -= 1
                if depth == 0:
                    end_brace = i
                    break
        if end_brace != -1:
            text = text[1:end_brace].strip()

    # Deve iniziare con locale === 'it' ?
    m = re.match(r"locale\s*===\s*['\"]it['\"]\s*\?\s*", text)
    if not m:
        return None

    after_q = text[m.end():]

    # Trova il ':' di separazione al livello 0 di parentesi/fragment/stringhe
    depth_paren = 0
    depth_frag = 0
    in_single_quote = False
    in_double_quote = False
    i = 0
    colon_pos = -1
    n = len(after_q)

    while i < n:
        c = after_q[i]

        # Gestione escape backslash
        if c == '\\' and (in_single_quote or in_double_quote):
            i += 2
            continue

        # Toggle stringhe
        if c == "'" and not in_double_quote:
            in_single_quote = not in_single_quote
            i += 1
            continue
        if c == '"' and not in_single_quote:
            in_double_quote = not in_double_quote
            i += 1
            continue

        # Dentro una stringa, ignoriamo tutto
        if in_single_quote or in_double_quote:
            i += 1
            continue

        if c == '(':
            depth_paren += 1
        elif c == ')':
            depth_paren -= 1
        elif c == '<' and i + 1 < n:
            if after_q[i+1] == '>':
                # Fragment opening <>
                depth_frag += 1
                i += 2
                continue
            elif after_q[i+1] == '/' and i + 2 < n and after_q[i+2] == '>':
                # Fragment closing </>
                depth_frag -= 1
                i += 3
                continue
        elif c == ':' and depth_paren == 0 and depth_frag == 0:
            colon_pos = i
            break
        i += 1

    if colon_pos == -1:
        return None

    it_raw = after_q[:colon_pos].strip()
    en_raw = after_q[colon_pos+1:].strip()

    # Pulisci parentesi e fragment
    def clean(raw):
        raw = raw.strip()
        if raw.startswith('(') and raw.endswith(')'):
            raw = raw[1:-1].strip()
        raw = remove_jsx_fragments(raw)
        # Stringa con apici singoli
        if raw.startswith("'") and raw.endswith("'"):
            raw = raw[1:-1]
        # Stringa con doppi apici
        elif raw.startswith('"') and raw.endswith('"'):
            raw = raw[1:-1]
        return raw.strip()

    return (clean(it_raw), clean(en_raw))


def replace_all_ternaries(text, locale):
    """
    Sostituisce tutti i ternary {locale === 'it' ? X : Y} nel testo
    con X o Y in base al locale.
    """
    result = []
    i = 0
    n = len(text)

    while i < n:
        # Cerca inizio ternary
        brace_pos = text.find('{', i)
        if brace_pos == -1:
            result.append(text[i:])
            break

        # Controlla se e' un ternary locale
        m = re.match(r"\{locale\s*===\s*['\"]it['\"]\s*\?", text[brace_pos:])
        if not m:
            # Non e' un ternary, aggiungi la { e continua
            result.append(text[i:brace_pos+1])
            i = brace_pos + 1
            continue

        # Aggiungi testo prima del ternary
        result.append(text[i:brace_pos])

        # Trova la } di chiusura bilanciata
        depth = 0
        j = brace_pos
        depth_frag = 0
        end_pos = -1
        while j < n:
            c = text[j]
            if c == '{':
                depth += 1
            elif c == '}':
                depth -= 1
                if depth == 0:
                    end_pos = j
                    break
            elif c == '<' and j + 1 < n:
                if text[j+1] == '>':
                    depth_frag += 1
                    j += 2
                    continue
                elif text[j+1] == '/' and j + 2 < n and text[j+2] == '>':
                    depth_frag -= 1
                    j += 3
                    continue
            j += 1

        if end_pos == -1:
            result.append(text[brace_pos:])
            break

        full_ternary = text[brace_pos:end_pos+1]
        pair = extract_ternary(full_ternary)

        if pair:
            result.append(pair[0] if locale == 'it' else pair[1])
        else:
            result.append(full_ternary)

        i = end_pos + 1

    return ''.join(result)


def jsx_to_spans(jsx_text, locale='it'):
    """
    Converte testo JSX (con <strong> e ternary) in lista di span PortableText.
    """
    # Prima risolvi tutti i ternary
    text = replace_all_ternaries(jsx_text, locale)

    spans = []
    parts = re.split(r'(<strong>.*?</strong>)', text, flags=re.DOTALL)
    for part in parts:
        if not part:
            continue
        strong_match = re.match(r'<strong>(.*?)</strong>', part, re.DOTALL)
        if strong_match:
            inner = unescape(strong_match.group(1).strip())
            # Potrebbe avere ancora ternary non risolti
            inner = replace_all_ternaries(inner, locale)
            inner = re.sub(r'\s+', ' ', inner).strip()
            if inner:
                spans.append({
                    "_type": "span",
                    "_key": gen_key("s"),
                    "text": inner,
                    "marks": ["strong"]
                })
        else:
            clean_text = unescape(part)
            clean_text = re.sub(r'\s+', ' ', clean_text).strip()
            if clean_text:
                spans.append({
                    "_type": "span",
                    "_key": gen_key("s"),
                    "text": clean_text,
                    "marks": []
                })
    return spans if spans else None


def make_block(style, spans, list_item=None, level=1):
    block = {
        "_type": "block",
        "_key": gen_key("b"),
        "style": style,
        "markDefs": [],
        "children": spans
    }
    if list_item:
        block["listItem"] = list_item
        block["level"] = level
    return block


def extract_prose_content(tsx_content):
    """Estrae il contenuto dalla div prose fino al div dei bottoni."""
    prose_start = tsx_content.find('className="prose')
    if prose_start == -1:
        prose_start = tsx_content.find("className='prose")
    if prose_start == -1:
        return ""

    tag_end = tsx_content.find('>', prose_start)
    content_start = tag_end + 1

    buttons_marker = 'className="mt-12 pt-8'
    buttons_pos = tsx_content.find(buttons_marker, content_start)
    if buttons_pos == -1:
        return tsx_content[content_start:]

    content_end = tsx_content.rfind('<', content_start, buttons_pos)
    return tsx_content[content_start:content_end]


def parse_prose_to_portable_text(prose_content, locale):
    """Converte il contenuto HTML/JSX in array PortableText per il locale dato."""
    blocks = []
    content = prose_content
    content_len = len(content)
    i = 0

    while i < content_len:
        # Salta whitespace
        while i < content_len and content[i] in ' \t\n\r':
            i += 1
        if i >= content_len:
            break

        # Cerca il prossimo tag di apertura
        tag_start = content.find('<', i)
        if tag_start == -1:
            break

        # Leggi il nome del tag
        tag_match = re.match(r'<(h[23]|p|ul|ol|blockquote)\b', content[tag_start:])
        if not tag_match:
            # Salta questo tag non interessante
            tag_end = content.find('>', tag_start)
            if tag_end == -1:
                break
            i = tag_end + 1
            continue

        tag_name = tag_match.group(1)

        # Trova la fine del tag di apertura
        open_tag_end = content.find('>', tag_start)
        if open_tag_end == -1:
            break

        # Trova il tag di chiusura corrispondente (gestisce annidamento)
        close_tag = f'</{tag_name}>'
        open_tag_str = f'<{tag_name}'

        depth = 1
        search_pos = open_tag_end + 1
        inner_end = -1

        while depth > 0 and search_pos < content_len:
            next_open = content.find(open_tag_str, search_pos)
            next_close = content.find(close_tag, search_pos)

            if next_close == -1:
                inner_end = content_len
                break

            if next_open != -1 and next_open < next_close:
                depth += 1
                search_pos = next_open + len(open_tag_str)
            else:
                depth -= 1
                if depth == 0:
                    inner_end = next_close
                else:
                    search_pos = next_close + len(close_tag)

        if inner_end == -1:
            i = open_tag_end + 1
            continue

        inner_content = content[open_tag_end + 1:inner_end].strip()
        i = inner_end + len(close_tag)

        if tag_name in ('h2', 'h3'):
            # Estrai testo per il locale
            resolved = replace_all_ternaries(inner_content, locale)
            # Rimuovi tag HTML rimasti
            resolved = re.sub(r'<[^>]+>', '', resolved)
            text = unescape(resolved)
            text = re.sub(r'\s+', ' ', text).strip()
            if text:
                style = 'h2' if tag_name == 'h2' else 'h3'
                blocks.append(make_block(style, [
                    {"_type": "span", "_key": gen_key("s"), "text": text, "marks": []}
                ]))

        elif tag_name == 'p':
            # Il contenuto potrebbe essere un ternario wrappato o testo diretto
            resolved = replace_all_ternaries(inner_content, locale)
            # Rimuovi tag HTML non <strong>
            # Mantieni <strong> per i span bold
            spans = jsx_to_spans(resolved, locale)
            if not spans:
                continue
            spans = [s for s in spans if s.get('text', '').strip()]
            if spans:
                blocks.append(make_block('normal', spans))

        elif tag_name == 'blockquote':
            resolved = replace_all_ternaries(inner_content, locale)
            resolved = re.sub(r'<[^>]+>', '', resolved)
            text = unescape(resolved)
            text = re.sub(r'\s+', ' ', text).strip()
            if text:
                blocks.append(make_block('blockquote', [
                    {"_type": "span", "_key": gen_key("s"), "text": text, "marks": []}
                ]))

        elif tag_name in ('ul', 'ol'):
            list_type = 'bullet' if tag_name == 'ul' else 'number'
            li_pattern = re.compile(r'<li>([\s\S]*?)</li>', re.DOTALL)
            for li_match in li_pattern.finditer(inner_content):
                li_content = li_match.group(1).strip()
                # Risolvi ternary nel li
                resolved = replace_all_ternaries(li_content, locale)
                spans = jsx_to_spans(resolved, locale)
                if not spans:
                    # Fallback: testo puro
                    plain = unescape(re.sub(r'<[^>]+>', '', resolved))
                    plain = re.sub(r'\s+', ' ', plain).strip()
                    if plain:
                        spans = [{"_type": "span", "_key": gen_key("s"), "text": plain, "marks": []}]
                if spans:
                    spans = [s for s in spans if s.get('text', '').strip()]
                    if spans:
                        blocks.append(make_block('normal', spans, list_item=list_type))

    return blocks


def read_tsx(slug):
    path = BLOG_BASE / slug / "page.tsx"
    if not path.exists():
        return None
    return path.read_text(encoding='utf-8')


def process_article(slug):
    print(f"\n--- Processando: {slug} ---")
    tsx = read_tsx(slug)
    if not tsx:
        print(f"  ERRORE: file non trovato")
        return None

    prose = extract_prose_content(tsx)
    if not prose:
        print(f"  ERRORE: sezione prose non trovata")
        return None

    _key_counter[0] = 0
    body_it = parse_prose_to_portable_text(prose, 'it')

    _key_counter[0] = 2000
    body_en = parse_prose_to_portable_text(prose, 'en')

    print(f"  IT: {len(body_it)} blocchi | EN: {len(body_en)} blocchi")

    return {
        "slug": slug,
        "_id": SLUG_TO_ID[slug],
        "body": body_it,
        "body_en": body_en
    }


def main():
    output_path = Path(r"C:\Users\Jarvis\blog_migration_data.json")

    results = []
    errors = []

    for slug in SLUG_TO_ID.keys():
        try:
            result = process_article(slug)
            if result:
                results.append(result)
            else:
                errors.append(slug)
        except Exception as e:
            print(f"  ECCEZIONE in {slug}: {e}")
            import traceback
            traceback.print_exc()
            errors.append(slug)

    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    print(f"\n{'='*50}")
    print(f"Completato: {len(results)}/{len(SLUG_TO_ID)} articoli")
    print(f"Output: {output_path}")
    if errors:
        print(f"Errori: {errors}")

    # Spot check dettagliato
    print("\n--- SPOT CHECK ---")
    for slug_check in ["automatizzare-produzione-scatole", "box-maker-produzione-automatica-scatole", "tendenze-packaging-2026"]:
        r = next((x for x in results if x['slug'] == slug_check), None)
        if not r:
            continue
        print(f"\nArticolo: {r['slug']}")
        for i, b in enumerate(r['body'][:4]):
            style = b.get('style', '?')
            li = ' [' + b.get('listItem', '') + ']' if b.get('listItem') else ''
            text = ' '.join(s.get('text', '') for s in b.get('children', []))
            print(f"  IT [{i}] {style}{li}: {text[:90]}")
        print("  ...")
        for i, b in enumerate(r['body_en'][:4]):
            style = b.get('style', '?')
            li = ' [' + b.get('listItem', '') + ']' if b.get('listItem') else ''
            text = ' '.join(s.get('text', '') for s in b.get('children', []))
            print(f"  EN [{i}] {style}{li}: {text[:90]}")


if __name__ == '__main__':
    main()
