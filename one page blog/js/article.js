 const readMore = document.getElementById('read-more');
 const articleContent = document.getElementById('article-content');

readMore.addEventListener('click', ()=> {
    articleContent.children[0].remove();
    let content = articleContent.children[0];
    content.setAttribute('class','col m10 s12');
    content.children[2].remove();
    const currentText = document.querySelector('.article');
    currentText.setAttribute('class', 'article2');
    const addText = document.createElement('p');
    addText.setAttribute('class', 'left-align');
    addText.innerHTML = `
        Reading is the best thing I’ve done to help myself progress professionally.
        From working as a retail store manager and in a call center, to working as a 
        senior marketing manager for one of the world’s largest publishing companies to 
        a senior content marketer for an online and mobile giving provider, reading has been 
        the most influential catalyst in my professional development.<br>
        <h5>Step 1: Set a timer </h5>
        For this exercise, you’re going to read for one minute.<br>
        Before you start, set a timer for 1 minute on your phone, watch, or online.<br>
        It doesn’t matter what you use as long as you’re ready to time your reading.<br>
        <h5> Step 2: Pick a regular book</h5>
        For this test, you don’t want to read a dictionary or a book with small font and
        margins. You want to pick a book you usually read. This way your reading test will
        be as accurate as possible.<br>
        <h5>Step 3: Read, read, and read </h5>
        Alright, now it’s time to read!
        Hit the start button on your timer and read until the time expires.
        As you read, keep these three tips in mind:
        Don’t look at the time as you read
        Don’t try to read faster than normal
        Just read at your average pace
        If you follow these three-pointers, then you won’t throw off the results of your test.<br>
        <h5> Step 4: Stop and count </h5>
        It’s time to test your results. <br>
        Here are the four steps you’ll need to take to figure out how fast you can read:
        Count the number of words per line for four lines
        Divide this number by four <br>
        Count the number of lines you read during your 1-minute test <br>
        Multiply the number from step 2 by the number in step 4 to get your average reading
        speed per minute. <br>
    `;
    currentText.appendChild(addText);

    /* change side icons */
    const icons = document.querySelector('.icons');
    for(let i = 0; i < 1; i++){
        icons.children[i+1].innerHTML = ' <i class="fas fa-share-alt"></i>';
        icons.children[i+1].setAttribute('id', 'share');

        icons.children[i+2].innerHTML = ' <i class="fas fa-star"></i>';
        icons.children[i+2].setAttribute('id', 'star');

        icons.children[i+3].innerHTML = ' <i class="fas fa-bookmark"></i>';
        icons.children[i+3].setAttribute('id', 'save');
    }







});
