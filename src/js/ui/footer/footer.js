import GithubLogo from './github.svg'

const footer = document.querySelector('.site-footer');
const copyText = document.createElement('p')
copyText.textContent = `Copyright © ${new Date().getFullYear()} Kubilay Bilgili`;
const githubImg = new Image();
githubImg.src = GithubLogo
githubImg.id = 'footer-git-img'
footer.appendChild(copyText);
footer.appendChild(githubImg)


