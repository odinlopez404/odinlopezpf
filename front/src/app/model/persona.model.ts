export class Persona {
    id?:number;
    nombre:String;
    apellido:String;
    titulo:String;
    descripcion:String;
    imagenPerfil:String;
    instagramUrl:String;
    linkedinUrl:String;
    linkGitHub:String


constructor(nombre:String, apellido:String, titulo:String,descripcion:String,imagenPerfil:String,instagramUrl:String, linkedinUrl:String, linkGitHub:String){
    this.nombre = nombre;
    this.apellido= apellido;
    this.titulo=titulo;
    this.descripcion= descripcion;
    this.imagenPerfil= imagenPerfil;
    this.instagramUrl= instagramUrl;
    this.linkedinUrl= linkedinUrl;
    this.linkGitHub= linkGitHub;
    }
}