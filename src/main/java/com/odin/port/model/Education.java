package com.odin.port.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "educaciones")
public class Education {
 @Id	
	    	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "tituloEdu")
	private String tituloEdu;
        
	@Column(name = "cargoEdu")
	private String cargoEdu;
        
        	@Column(name = "descripcionEdu")
	private String descripcionEdu;
                
     	@Column(name = "fechaDesdeEdu")
	private String fechaDesdeEdu;
        
    	@Column(name = "fechaHastaEdu")
	private String fechaHastaEdu;

    public Education() {
    }

    public Education(String tituloEdu, String cargoEdu, String descripcionEdu, String fechaDesdeEdu, String fechaHastaEdu) {
                super();
        this.tituloEdu = tituloEdu;
        this.cargoEdu = cargoEdu;
        this.descripcionEdu = descripcionEdu;
        this.fechaDesdeEdu = fechaDesdeEdu;
        this.fechaHastaEdu = fechaHastaEdu;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTituloEdu() {
        return tituloEdu;
    }

    public void setTituloEdu(String tituloEdu) {
        this.tituloEdu = tituloEdu;
    }

    public String getCargoEdu() {
        return cargoEdu;
    }

    public void setCargoEdu(String cargoEdu) {
        this.cargoEdu = cargoEdu;
    }

    public String getDescripcionEdu() {
        return descripcionEdu;
    }

    public void setDescripcionEdu(String descripcionEdu) {
        this.descripcionEdu = descripcionEdu;
    }

    public String getFechaDesdeEdu() {
        return fechaDesdeEdu;
    }

    public void setFechaDesdeEdu(String fechaDesdeEdu) {
        this.fechaDesdeEdu = fechaDesdeEdu;
    }

    public String getFechaHastaEdu() {
        return fechaHastaEdu;
    }

    public void setFechaHastaEdu(String fechaHastaEdu) {
        this.fechaHastaEdu = fechaHastaEdu;
    }
    
    
        	

}
