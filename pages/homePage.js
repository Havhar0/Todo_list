export default function home() {

    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    content.append(wrapper);

    let top = document.createElement('div');
    top.classList.add('top');
    wrapper.append(top);

    let main = document.createElement('div');
    main.classList.add('main');
    wrapper.append(main);

    let leftColumn = document.createElement('div');
    leftColumn.classList.add('left-column');
    main.append(leftColumn);

    let rightColumn = document.createElement('div');
    rightColumn.classList.add('right-column');
    main.append(rightColumn);
   
// ------------------------------ FOOTER

    // let footer = document.createElement('div');
    // footer.classList.add('footer');
    // wrapper.append(footer);

    // let footerCont = document.createElement('div');
    // footerCont.classList.add('footer-cont');
    // footerCont.textContent = 'Developed by Damian Grabowski';
    // footer.append(footerCont);

    // let footerGit = document.createElement('div');
    // footerGit.classList.add('footer-git');
    // footer.append(footerGit);
}