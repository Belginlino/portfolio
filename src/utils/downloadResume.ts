export async function downloadResume(e?: React.MouseEvent) {
  if (e) {
    e.preventDefault();
  }

  const fileUrl = "/Belgin_Lino_Resume.pdf";
  const fileName = "Belgin_Lino_Resume.pdf";

  try {
    const res = await fetch(fileUrl);
    if (!res.ok) throw new Error("Failed to fetch PDF");
    const blob = await res.blob();
    const pdfBlob = new Blob([blob], { type: "application/pdf" });
    const blobUrl = window.URL.createObjectURL(pdfBlob);

    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => {
      window.URL.revokeObjectURL(blobUrl);
    }, 2000);
  } catch (error) {
    console.warn("Direct blob download failed, falling back to direct link:", error);
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = fileName;
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
