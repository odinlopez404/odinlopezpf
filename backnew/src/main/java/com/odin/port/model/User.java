package com.odin.port.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "users")
public class User {

   @Id	
	    	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "nombre")
	private String nombre;

	@Column(name = "apellido")
	private String apellido;
        
        @Column(name = "titulo")
	private String titulo;
	
	@Column(name = "descripcion")
	private String descripcion;
        
        @Column(name = "linkLikedin")
	private String linkLikedin;
        
        @Column(name = "linkInstagram")
	private String linkInstagram;
        
        @Column(name = "imagenPerfil")
	private String imagenPerfil;
        
        @Column(name = "imagenBanner")
	private String imagenBanner;

    public User() {
    }

    public User(String nombre, String apellido, String titulo, String descripcion, String linkLikedin, String linkInstagram, String imagenPerfil, String imagenBanner) {
        super();
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.linkLikedin = linkLikedin;
        this.linkInstagram = linkInstagram;
        this.imagenPerfil = imagenPerfil;
        this.imagenBanner = imagenBanner;
    }
     
   

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getLinkLikedin() {
        return linkLikedin;
    }

    public void setLinkLikedin(String linkLikedin) {
        this.linkLikedin = linkLikedin;
    }

    public String getLinkInstagram() {
        return linkInstagram;
    }

    public void setLinkInstagram(String linkInstagram) {
        this.linkInstagram = linkInstagram;
    }

    public String getImagenPerfil() {
        return imagenPerfil;
    }

    public void setImagenPerfil(String imagenPerfil) {
        this.imagenPerfil = imagenPerfil;
    }

    public String getImagenBanner() {
        return imagenBanner;
    }

    public void setImagenBanner(String imagenBanner) {
        this.imagenBanner = imagenBanner;
    }
        
        
        
}
