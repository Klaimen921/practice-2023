import { SubtitleBlock } from "./Classes/SubtitleBlock.js";

export function AddSubtitleBlock() {
    const subtitleBlock = new SubtitleBlock({});
    const subtitleBlockHTML = subtitleBlock.ToHTMLElement();

    const subtitleBlockContainer = document.getElementById("subtitles-list-div")
    subtitleBlockContainer.appendChild(subtitleBlockHTML);
}

window.AddSubtitleBlock = AddSubtitleBlock;