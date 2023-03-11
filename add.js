    function addPoem() {
        const title  = document.querySelector("#title-from-input");
        const poem   = document.querySelector("#poem-from-textarea");
        localStorage.setItem("title", title.value);
        localStorage.setItem("poem", poem.value);

        const newItem = { name: localStorage.getItem('author') ?? 'Guest User', title: this.localStorage.getItem('title') ?? 'null', poem:  this.localStorage.getItem('poem') ?? 'null' }
        window.localStorage.setItem('fullPoemInfo', JSON.stringify(newItem));
        window.location.href = "read.html";
    }

