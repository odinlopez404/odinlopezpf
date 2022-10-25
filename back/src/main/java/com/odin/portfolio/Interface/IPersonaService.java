
package com.odin.portfolio.Interface;

import com.odin.portfolio.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    
    //traer lista personas
    public List<Persona> getPersona();
    
    //guardar persona
    public void savePersona(Persona persona);
    
    //eliminar usuario
    
    public void deletePersona(Long id);
    
    
    //buscar persona
    
    public Persona findPersona(Long id);
    
}
