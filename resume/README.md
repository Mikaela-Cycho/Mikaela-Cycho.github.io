# resume/

Put your resume PDFs here. The filenames must match exactly, or the download
button won't find them.

| File                          | Served to                        |
| ----------------------------- | -------------------------------- |
| `Yujia-Duan-Resume-EN.pdf`    | Visitors reading the English site |
| `Yujia-Duan-Resume-ZH.pdf`    | Visitors reading the Chinese site |

The button serves whichever matches the language the visitor is currently
reading, and switches with the EN / 中 toggle.

**Only have one version?** Copy the same PDF under both names, or edit the
`RESUME` block in `i18n.js` to point both languages at one file:

```js
window.RESUME = {
  en: "resume/Yujia-Duan-Resume.pdf",
  zh: "resume/Yujia-Duan-Resume.pdf",
};
```

That's also where to change the filenames if you'd rather name them something
else — nothing in `index.html` needs touching.

## Before the PDFs are here

The button is safe to deploy without them. Clicking it checks whether the file
exists first, and if it doesn't, shows *"Not uploaded yet — email me and I'll
send it over"* instead of dumping the visitor on a 404 page.

## A note on the filename

Whatever you name the file is what lands in the recruiter's downloads folder,
sitting next to a hundred others. `Yujia-Duan-Resume-EN.pdf` is findable;
`resume_final_v3.pdf` is not. Worth keeping the name as it is.
