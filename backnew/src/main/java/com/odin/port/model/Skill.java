package com.odin.port.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="skills")
public class Skill {
@Id	
	    	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "nombreSkill")
	private String nombreSkill;
        
	@Column(name = "porcentajeSkill")
	private String porcentajeSkill;

    public Skill() {
    }

    public Skill(String nombreSkill, String porcentajeSkill) {
        super();
        this.nombreSkill = nombreSkill;
        this.porcentajeSkill = porcentajeSkill;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNombreSkill() {
        return nombreSkill;
    }

    public void setNombreSkill(String nombreSkill) {
        this.nombreSkill = nombreSkill;
    }

    public String getPorcentajeSkill() {
        return porcentajeSkill;
    }

    public void setPorcentajeSkill(String porcentajeSkill) {
        this.porcentajeSkill = porcentajeSkill;
    }
    
        
        
}
