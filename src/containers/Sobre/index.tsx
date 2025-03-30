import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
    <section>
        <Titulo fontSize={16}>Sobre mim</Titulo>
        <Paragrafo tipo='principal'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident consectetur ut tempore, autem laudantium dignissimos explicabo culpa enim a! Perferendis modi beatae sit eveniet iste iusto at, necessitatibus accusamus consequatur.
        </Paragrafo>
        <GithubSecao>
            <img src="https://github-readme-stats.vercel.app/api?username=viniciusbaptistadev&show_icons=true&theme=dark&title_color=00FFFF&text_color=00FFFF&icon_color=FF4500" />
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=viniciusbaptistadev&layout=compact&langs_count=7&theme=dark&locale=pt-BR&title_color=00FFFF&text_color=00FFFF" />
        </GithubSecao>
    </section>
)

export default Sobre;