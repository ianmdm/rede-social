import react from 'react';

export default function Header(){
    return(
        <header className="header">
                <div className="toolbar">
                    <div>
                       <span>Conecta Dev</span> 
                    </div>
                    <div>
                        <button>Novo Post</button>
                        <span>Img-1</span>
                        <span>Img-2</span>
                    </div>                    
                </div>
        </header>
    )
};