import PyPDF2
with open('Dr. Maya Reynolds, PsyD.pdf', 'rb') as f:
    reader = PyPDF2.PdfReader(f)
    print('Total pages:', len(reader.pages))
    for i, page in enumerate(reader.pages):
        text = page.extract_text()
        tlen = len(text) if text else 0
        print(f'--- PAGE {i+1} (len={tlen}) ---')
        if text:
            print(text[:5000])
        print()
