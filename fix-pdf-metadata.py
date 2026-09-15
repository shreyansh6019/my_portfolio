from pypdf import PdfReader, PdfWriter

input_file = "public/shreyansh_nigam_9.pdf"
output_file = "public/shreyansh-nigam-resume.pdf"

reader = PdfReader(input_file)
writer = PdfWriter()

for page in reader.pages:
    writer.add_page(page)

writer.add_metadata({
    "/Title": "Shreyansh Nigam - Resume",
    "/Author": "Shreyansh Nigam",
    "/Subject": "Frontend Developer Resume",
    "/Creator": "Shreyansh Nigam",
    "/Producer": "Shreyansh Nigam",
})

with open(output_file, "wb") as output:
    writer.write(output)

print(f"Created: {output_file}")