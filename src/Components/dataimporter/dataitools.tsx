export function previewContent(msg: string, numchar: number): string {
    return(`${msg.substring(0,numchar-3)}...`);
}