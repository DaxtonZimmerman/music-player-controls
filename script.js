class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.current = null;
    }

    add(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.current = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    moveNext() {
        if (this.current) {
            this.current = this.current.next || this.head;
        }
    }
    movePrev() {
        if (this.current) {
            this.current = this.current.prev || this.tail;
        }
    }
    getCurrent() {
        return this.current ? this.current.value : null;
    }
}

const playlist = new DoublyLinkedList();

playlist.add("Thinking Out Loud");
playlist.add("Perfect");
playlist.add("Shape of You");
playlist.add("Photograph");
playlist.add("Castle on the Hill");

const songTitle = document.getElementById("songTitle");
const previousButton = document.getElementById("previousButton");
const playButton = document.getElementById("playButton");
const nextButton = document.getElementById("nextButton");

let isPlaying = false;

function updateDisplay() {
    const song = playlist.getCurrent();

    if (isPlaying) {
        songTitle.textContent = "Playing: " + song;
    } else {
        songTitle.textContent = "Paused: " + song;
    }
}

nextButton.addEventListener("click", function() {
    playlist.moveNext();
    updateDisplay();
});

previousButton.addEventListener("click", function() {
    playlist.movePrev();
    updateDisplay();
});

playButton.addEventListener("click", function() {
    isPlaying = !isPlaying;

    if (isPlaying) {
        playButton.textContent = "Pause";
    } else {
        playButton.textContent = "Play";
    }

    updateDisplay();
});

updateDisplay();