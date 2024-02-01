import userMock from "./User";

class Project {
    constructor(title, description, link, tags, image, date, author) {
        this.title = title;
        this.description = description;
        this.link = link;
        this.tags = tags;
        this.image = image;
        this.date = date;
        this.author = author;
    }
}

const projectMock = new Project(
    'Ecommerce One Page',
    'Temos o prazer de compartilhar com vocês uma variação do nosso primeiro recurso gratuito. É um modelo de IA. Tentamos redesenhar uma versão mais minimalista do nosso primeiro projeto.',
    'https://gumroad.com/products/wxCSL',
    [
        {
          id: 1,
          desc: 'UX',
        },
        {
          id: 2,
          desc: 'Web'
        }
    ],
    'src/assets/project-1.png',
    '12/23',
    userMock
);

export default projectMock