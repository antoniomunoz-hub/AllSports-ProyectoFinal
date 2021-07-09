
import React from 'react';
import {useForm} from '../Components/Hook/UseForm';
import "../StylesPages/Create&EditPerfil.css";
import weights from "../data/ListWeights.json";
import sports from "../data/ListSports.json";
import roles from "../data/RolesUser.json";
import prices from "../data/PriceManager.json";
import countryList from "../data/countryList.json";
import Select from 'react-select';




export default function CreateAccount() {
    const initialFormState = {name: "", lastname: "", male: "", female: "", password: "", confirmpassword: "", date: "",
     weights: "", country: "", role: "", sport:"", specialty: "", price: "", career:""};
    const [form, handleInputChange, handleSelectChange] = useForm(initialFormState); // Custom Hook
    // const [extra, setExtra] = useState(false);
    const handleSubmit = e => {
        e.preventDefault();
        // TODO: fetch con método post a tu endpoint de registro

        // entrar en componenter abrir create account y que el form me devuelva solo los values no el objeto entero 
    };
    
    return (
        <div>
            <h2>Es Momento de unirte a la comuindad Allsports</h2><br/>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Que perfil tienes?</legend>
                    <div className="imputblock">
                        <h3>Role:</h3>
                        <Select options={roles} value={form.role} onChange={value => handleSelectChange(value, "role")} name="role"/><br/>
                    </div>
                    <div className="imputblock">
                        <h3>Disciplina:</h3>
                        <Select options={sports} value={form.sport} onChange={value => handleSelectChange(value, "sport")} name="sport"/><br/>
                    </div>

                    {form.role.value === "Entrenador" && (
                    <div className="imputblock">
                        <h3>Especialidades:</h3><br/>
                        <textarea className="textarea-form" name="specialty" id="" cols="45" rows="10" 
                        placeholder="Escribe y resume tus especialidades.."
                        onChange={handleInputChange} value={form.specialty}>
                    </textarea>
                    </div>)}
                    
                    {form.role.value === "Manager"  && (
                    <div className="imputblock">
                        <h3>% Segun Contrato:</h3>
                        <Select options={prices} value={form.prices} onChange={value => handleSelectChange(value, "price")} name="price"/><br/>
                    </div>)}

                    {form.role.value === "Atleta" &&(
                    <div className="imputblock">
                        <h3>Carrera:</h3><br/>
                        <textarea className="textarea-form" name="career" id="" cols="45" rows="10" 
                        placeholder="Resumenos tu carrera profesional/amateur.."
                        onChange={handleInputChange} value={form.career}>
                    </textarea>
                </div>)}

                </fieldset>

                <br/>
                
                <fieldset>
                    <div>
                        <h3>Datos Personales</h3>
                        <div className="imputblock">
                        <label htmlFor="nameimput" >Nombre:</label><br/>
                        <input onChange={handleInputChange} value={form.name} type="text" id="nameimput" name="name" placeholder="Introduce tu nombre"/>
                    </div>

                    <div className="imputblock">
                        <label htmlFor="lastimput">Apellidos:</label><br/>
                        <input onChange={handleInputChange} value={form.lastname} type="text" id="lastimput" name="lastname" placeholder="Introduce tu Apellidos"/>
                    </div><br/>
                    
                    <div className="birthdate">
                    Fecha: <input onChange={handleInputChange} value={form.date} type="date" name="date"/>
                    </div>

                    <div className="sexo">
                        <h4>Sexo:</h4>
                        <input onChange={handleInputChange} value={form.male} type="radio" name="male" value="h" required/> Hombre
                        <input onChange={handleInputChange} value={form.female} type="radio" name="female" value="m"/> Mujer
                    </div>

                    <div className="weight">
                        <h4>Peso:</h4>
                        <Select options={weights} value={form.weights} onChange={value => handleSelectChange(value, "weights")} name="weights"/>
                    </div>

                    <div className="imputblock">
                        <h3>Pais:</h3>
                        <Select options={countryList} value={form.country} onChange={value => handleSelectChange(value, "country")} name="country"/>
                    </div>

                    <div className="imputblock">
                        <label htmlFor="emailimput">Email:</label><br/>
                        <input onChange={handleInputChange} value={form.email} required type="email" id="emailimput" name="email" placeholder="Introduce tu Correo"/>
                    </div>

                    <div className="imputblock">
                        </div>
                        <label htmlFor="paswordintput">Contraseña:</label><br/>
                        <input onChange={handleInputChange} value={form.password} required type="password" id="paswordinput" name="password" placeholder="Introduce tu Contraseña"/>
                        <label htmlFor="confirmpaswordintput"></label><br/>
                        <input onChange={handleInputChange} value={form.confirmpassword} required type="password" id="confirmpaswordinput" name="confirmpassword" placeholder="Confirma Contraseña"/>
                    </div>    
                </fieldset><br/>      
                <input className type="submit" value="Enviar"></input> 
            </form>

    
        </div>    
    )
}

