import React from 'react';
import './Docs.css';
const Docs=()=>{
    return (
        <div className="main2 ">
            <div className='containerd'>
                <p className='headingd'>Programming Languages</p>
                <div className='gridd'>
                    <a className='elementd' href='https://docs.python.org/3/index.html' target="_blank" rel="noopener noreferrer">
                        <img  src='https://logos-download.com/wp-content/uploads/2016/10/Python_logo_icon-700x697.png' alt='python'/>
                        <p>Python</p>
                    </a>
                    <a className='elementd' href='https://www.ecma-international.org/publications/standards/Ecma-262-arch.htm' target="_blank" rel="noopener noreferrer">
                        <img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png' alt='javascript'/>
                        <p>Javascript</p>
                    </a>
                    <a className='elementd' href='https://docs.oracle.com/en/java/javase/14/' target="_blank" rel="noopener noreferrer">
                        <img  src='https://cdn.iconscout.com/icon/free/png-256/java-43-569305.png' alt='java'/>
                        <p>Java</p>
                    </a>
                    <a className='elementd' href='https://isocpp.org/std/the-standard' target="_blank" rel="noopener noreferrer">
                        <img  src='https://webforpc.com/wp-content/uploads/2018/03/c-plus-plus-program-logo-image.png' alt='cpp'/>
                        <p>C++</p>
                    </a>
                    <a className='elementd' href='http://www.open-std.org/jtc1/sc22/wg14/www/docs/n1256.pdf' target="_blank" rel="noopener noreferrer">
                        <img  src='http://pngimg.com/uploads/letter_c/letter_c_PNG22.png' alt='c'/>
                        <p>C</p>
                    </a>
                    <a className='elementd' href='https://docs.microsoft.com/en-us/dotnet/csharp/' target="_blank" rel="noopener noreferrer">
                        <img  src='https://camo.githubusercontent.com/0617f4657fef12e8d16db45b8d73def73144b09f/68747470733a2f2f646576656c6f7065722e6665646f726170726f6a6563742e6f72672f7374617469632f6c6f676f2f6373686172702e706e67' alt='c#'/>
                        <p>C#</p>
                    </a>
                    <a className='elementd' href='https://www.r-project.org/other-docs.html' target="_blank" rel="noopener noreferrer">
                        <img  src='https://mirai-solutions.ch/assets/images/illu-r-language.png' alt='R'/>
                        <p>R</p>
                    </a>
                    <a className='elementd' href='https://golang.org/doc/' target="_blank" rel="noopener noreferrer">
                        <img  src='https://golang.org/lib/godoc/images/go-logo-blue.svg' alt='Go'/>
                        <p>Go</p>
                    </a>
                </div>
            </div>
        </div>

    )
}


export default Docs;