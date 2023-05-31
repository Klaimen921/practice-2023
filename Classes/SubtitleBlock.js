import { AddSubtitleBlock } from "../addRemoveSubtitleButton.js";

export class SubtitleBlock {
    constructor({ start, end, text }) {
        this.start = start;
        this.end = end;
        this.text = text ?? '';
    }

    ToHTMLElement() {
        const block = document.createElement('div');
        block.classList.add('subtitles-block-wrapper');

        const timeCod = document.createElement('div');
        timeCod.classList.add('time-cod');

        const timeSelectorStart = document.createElement('input');
        timeSelectorStart.classList.add('time-selector');
        timeSelectorStart.type = 'text';
        timeSelectorStart.inputmode = 'numeric';
        timeSelectorStart.placeholder = '00:00:00.00';
        timeSelectorStart.dataset.mask = '99:99:99.00';

        const timeSelectorEnd = document.createElement('input');
        timeSelectorEnd.classList.add('time-selector');
        timeSelectorEnd.type = 'text';
        timeSelectorEnd.inputmode = 'numeric';
        timeSelectorEnd.placeholder = '00:00:00.00';
        timeSelectorEnd.dataset.mask = '99:99:99.00';

        timeCod.appendChild(timeSelectorStart);
        timeCod.appendChild(timeSelectorEnd);

        const subtitlesText = document.createElement('div');
        subtitlesText.classList.add('subtitles-text');

        const textArea = document.createElement('textarea');
        textArea.placeholder = 'Новые субтитры';
        textArea.classList.add('text-for-video');
        subtitlesText.appendChild(textArea);

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('add-subtitle-button');

        const button = document.createElement('button');
        button.innerText = 'Добавить';
        buttonContainer.appendChild(button);

        button.addEventListener('click', () => {
            AddSubtitleBlock();
        });

        block.appendChild(timeCod);
        block.appendChild(subtitlesText);
        block.appendChild(buttonContainer);

        return block;
    }
}