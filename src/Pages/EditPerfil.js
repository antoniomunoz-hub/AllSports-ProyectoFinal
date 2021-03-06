
import React from 'react';
import CountrySelector from '../Components/Selects/CountrySelector';
import SportsSelect from '../Components/Selects/SportsSelect';
import ListWeights from '../Components/Selects/ListWheights';

export default function EditPerfil() {
    return (
        <div>
            <h2>Ha habido cambios ? Manten tu perfil al dia </h2>
            <form action="">
                <fieldset>
                    <legend>Que perfil tienes?</legend>
                    <div>
                        <input type="radio" name="typePerfil" id="athletePerfil" />
                        <label htmlFor="athletePerfil" >Athleta</label>
                    </div>
                    <div>
                        <input type="radio" name="typePerfil" id="coachPerfil" />
                        <label htmlFor="coachPerfil">Entrenador</label>
                    </div>
                    <div>
                        <input type="radio" name="typePerfil" id="managerPerfil" />
                        <label htmlFor="managerPerfil">Manager</label>
                    </div>

                    <div className="imputblock">
                            <h3>Disciplina:</h3>
                            <SportsSelect/><br/>
                    </div>
                </fieldset>

                <br/>
                
                <fieldset>
                    <div>
                        <h3>Datos Personales</h3>
                        <div className="imputblock">
                        <label htmlFor="nameimput">Nombre:</label><br/>
                        <input type="text" id="nameimput" name="username" placeholder="Introduce tu nombre" disabled/>
                    </div>

                    <div className="imputblock">
                        <label htmlFor="lastimput">Apellidos:</label><br/>
                        <input type="text" id="lastimput" name="lastname" placeholder="Introduce tu Apellidos" disabled/>
                    </div><br/>
                    
                    <div className="birthdate">
                    Fecha: <input type="date" name="fecha" disabled/>
                    </div>

                    <div className="sexo">
                        <h4>Sexo:</h4>
                        <input type="radio" name="hm" value="h" disabled/> Hombre
                        <input type="radio" name="hm" value="m" disabled/> Mujer
                    </div>

                    <div className="weight">
                        <h4>Peso:</h4>
                        <ListWeights/>
                    </div>

                    <div className="imputblock">
                        <h3>Pais:</h3>
                        <CountrySelector/><br/>
                    </div>

                    <div className="imputblock">
                        <label htmlFor="emailimput">Email:</label><br/>
                        <input required type="email" id="emailimput" name="Email" placeholder="Introduce tu Correo"/>
                    </div>

                    <div className="imputblock">
                        </div>
                        <label htmlFor="paswordintput">Contrase??a:</label><br/>
                        <input required type="password" id="paswordinput" name="password" placeholder="Introduce tu Contrase??a"/>
                        <label htmlFor="confirmpaswordintput"></label><br/>
                        <input required type="password" id="confirmpaswordinput" name="password" placeholder="Confirma Contrase??a"/>
                    </div>    
                </fieldset><br/>      
                <input type="submit" value="Enviar"></input> 
            </form>
        </div>    
    )
}
