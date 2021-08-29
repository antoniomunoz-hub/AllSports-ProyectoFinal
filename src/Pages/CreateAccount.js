
import React,{useEffect, useState} from 'react';
import {useForm} from '../Components/Hook/UseForm';
import "../StylesPages/Create&EditPerfil.css";
import weights from "../data/ListWeights.json";
import roles from "../data/RolesUser.json";
import prices from "../data/PriceManager.json";
import countryList from "../data/countryList.json";
import Select from 'react-select';
import URL from '../context/Consts';
import {useAuthContext} from '../context/AuthContext';




export default function CreateAccount() {
    
    const {getToken} = useAuthContext();

    const initialFormState = {firstName: "", lastName: "", sex: "", password: "", birth: "",
     weight: "", country: "", roles: "", sport_id:"", priceManager:""};
    const [form, handleInputChange, handleSelectChange, handleRadioChange] = useForm(initialFormState); // Custom Hook
    const [sports, setSports] = useState([])
    useEffect(async ()=>{
        const response = await fetch(URL+"sports",{method:"GET",headers: new Headers({ 'Authorization': 'Bearer ' +getToken()})});
        const data = await response.json();    
        setSports(data.map((e)=>
        { const labelValue = {label:e.name, value:e.id};
        return labelValue;        
    }));
    },[])

    const [image, setImage] = useState('');
    const handleImageUpload = e => setImage(e.target.files[0]);

    // console.log(form)

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(form);

        const options = {
            method:"POST",
            headers: { 
                'Authorization': 'Bearer ' + getToken(),
                "Content-Type": "application/json"},
            body: JSON.stringify(form) 
        }

        const response = await fetch(URL+"users", options);
        // eslint-disable-next-line
        const data = await response.json();


        const formImage = new FormData();
        formImage.append("File", image);
                
        const optionsImage = {
            method: "POST",
            body: formImage
        }

        const responseImage = await fetch(URL+"users/uploadImage/" + data.id, optionsImage);
        // eslint-disable-next-line
        const dataImage = await responseImage;

        console.log(dataImage);

        if(response.status >= 200 && response.status < 300) {
            alert("Usuario creado correcta")
        } else {
            alert("Login incorrecto");
        }

    };

 
    return (
        <div>
            <h2>Es Momento de unirte a la comunidad Allsports</h2><br/>
            <form onSubmit={handleSubmit} method="POST">
                <fieldset>
                    <legend>Que perfil tienes?</legend>
                    <div className="imputblock">
                        <h3>Role:</h3>
                        <Select options={roles} value={form.roles.value} onChange={value => handleSelectChange(value.value, "roles")} name="roles"/><br/>
                    </div>
                    <div className="imputblock">
                        <h3>Disciplina:</h3>
                        <Select options={sports} value={form.sport_id.value} onChange={value => handleSelectChange(value.value, "sport_id")} name="sport_id"/><br/>
                    </div>

                    {form.roles === "Entrenador" && (
                    <div className="imputblock">
                        <h3>Especialidades:</h3><br/>
                        <textarea className="textarea-form" name="speciality" id="" cols="45" rows="10" 
                        placeholder="Escribe y resume tus especialidades.."
                        onChange={handleInputChange} value={form.specialty}>
                    </textarea>
                    </div>)}
                    
                    {form.roles === "Manager"  && (
                    <div className="imputblock">
                        <h3>% Segun Contrato:</h3>
                        <Select options={prices} value={form.priceManager.value} onChange={value => handleSelectChange(value.value, "priceManager")} name="priceManager"/><br/>
                    </div>)}

                    {form.roles === "Atleta" &&(
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
                        <input onChange={handleInputChange} value={form.name} type="text" id="nameimput" name="firstName" placeholder="Introduce tu nombre"/>
                    </div>

                    <div className="imputblock">
                        <label htmlFor="lastimput">Apellidos:</label><br/>
                        <input onChange={handleInputChange} value={form.lastname} type="text" id="lastimput" name="lastName" placeholder="Introduce tu Apellidos"/>
                    </div><br/>
                    
                    <div className="birthdate">
                    Fecha: <input onChange={handleInputChange} value={form.date} type="date" name="birth"/>
                    </div>

                    <div className="sexo" onChange={handleRadioChange}>
                        <h4>Sexo:</h4>
                        <input onChange={handleRadioChange} value="male" type="radio" name="sex" required/> Hombre
                        <input onChange={handleRadioChange} value="female" type="radio" name="sex"/> Mujer
                    </div>
                    

                    <div className="weight">
                        <h4>Peso:</h4>
                        <Select options={weights} value={form.weight.value} onChange={value => handleSelectChange(value.value, "weight")} name="weight"/>
                    </div>

                    <div className="imputblock">
                        <h3>Pais:</h3>
                        <Select options={countryList} value={form.country.value} onChange={value => handleSelectChange(value.value, "country")} name="country"/>
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

                    <div className="imputblock">
                        <label htmlFor="imgpath" className="form-label">Tu foto de perfil</label>
                        <input onChange={handleImageUpload} name="imgpath" type="file" id="imgpath" className="form-control" accept="png jpg jpeg" />                  
                    </div>  
                </fieldset>
                <br/>


                <input type="submit" value="Enviar"></input> 
            </form>

        </div>    
    )
}

