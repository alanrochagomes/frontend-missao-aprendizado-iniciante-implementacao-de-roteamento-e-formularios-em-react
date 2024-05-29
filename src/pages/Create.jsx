export default function Create() {
    return (
    <div>
        <h1>Criar DevMon</h1>
        
        <form>
            <div>
                <label htmlFor='nome'>Nome*:</label><br></br>
                <input type='text' id='nome' name='nome' placeholder='Insira o nome'></input>
            </div>

            <div>
                <label htmlFor='Imagem'>Imagem (URL)*:</label><br></br>
                <input type='text' id='imagem' name='imagem' placeholder='Insira a URL da imagem'></input>
            </div>

            <div>
                <label htmlFor='nome'>Evolui Para (opcional):</label><br></br>
                <input type='text' id='nome' name='nome' placeholder='Insira o nome da evolução'></input>
            </div>

            <div>
                <button type='submit'>Criar</button>
                <button type='reset'>Reiniciar</button>
            </div>
        </form>
    </div>)
}
