class novel {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  
    sayMyNovelName() {
      console.log(`This novel is called ${this.title} by ${this.author}`);
    }
  
    getDetails() {
      return "City of Bones by Cassandra Clare";
    }
  }
  
  const my_novel = new novel();
  my_novel.title = "City of Bones";
  my_novel.author = "Cassandra Clare";
  my_novel.sayMyNovelName();
  
  console.log(my_novel.getDetails());