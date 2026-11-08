const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const newsArticle = document.getElementById("newsArticle");

const article = news.find(item => item.id === id);


if (article) {

    newsArticle.innerHTML = `
        <article class="news_detail">

            <h1>
                ${article.title}
            </h1>
            
            <p>
                ${article.content}
            </p>

        </article>
    `;

} else {

    newsArticle.innerHTML = `
        <h1>記事が見つかりません</h1>
        <p>指定されたNEWSは存在しません。</p>
    `;

}