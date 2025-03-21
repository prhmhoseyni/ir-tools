export interface CopyToClipboardConfig {
    onSuccess: () => void;
    onError: () => void;
}

export default function copyToClipboard(text: string, config: Partial<CopyToClipboardConfig>): void {

    if (navigator.clipboard && window.isSecureContext) {

        navigator.clipboard.writeText(text)
            .then(() => config.onSuccess && config.onSuccess())
            .catch(() => config.onError && config.onError());

    } else {

        const textArea = document.createElement("textarea");

        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        new Promise((resolve, reject) => {
            document.execCommand("copy") ? resolve("resolved") : reject("rejected");
            textArea.remove();
        })
            .then(() => config.onSuccess && config.onSuccess())
            .catch(() => config.onError && config.onError());
    }
};