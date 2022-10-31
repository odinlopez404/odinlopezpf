package com.odin.port.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="proyectos")
public class Proyecto {
 @Id	
	    	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "tituloPro")
	private String tituloPro;
        
	@Column(name = "imagenPro")
	private String imagenPro;
        
        	@Column(name = "descripcionPro")
	private String descripcionPro;

    public Proyecto() {
    }

    public Proyecto(String tituloPro, String imagenPro, String descripcionPro) {
        super();
        this.tituloPro = tituloPro;
        this.imagenPro = imagenPro;
        this.descripcionPro = descripcionPro;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTituloPro() {
        return tituloPro;
    }

    public void setTituloPro(String tituloPro) {
        this.tituloPro = tituloPro;
    }

    public String getImagenPro() {
        return imagenPro;
    }

    public void setImagenPro(String imagenPro) {
        this.imagenPro = imagenPro;
    }

    public String getDescripcionPro() {
        return descripcionPro;
    }

    public void setDescripcionPro(String descripcionPro) {
        this.descripcionPro = descripcionPro;
    }
    
    
                

}
