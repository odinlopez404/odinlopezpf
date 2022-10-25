package com.odin.portfolio.Controller;

import com.odin.portfolio.Entity.Persona;
import com.odin.portfolio.Interface.IPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class PersonaController {
    
    @Autowired IPersonaService ipersonaService;

    @GetMapping("personas/traer")
    
    public List<Persona> getPersona(){
        return ipersonaService.getPersona();
    }
    @PostMapping("/personas/crear")
    public String createPersona(@RequestBody Persona persona){
    ipersonaService.savePersona(persona);
    return "Persona creada";
    }
    
    @DeleteMapping("/personas/borrar/{id}")
    public String deletePersona(@PathVariable Long id){
    ipersonaService.deletePersona(id);
    return "Persona " + id +" eliminada";
    }
    
    @PutMapping("/personas/editar/{id}")
    public Persona editPersona(@PathVariable Long id,
                                @RequestParam("nombre") String nuevoNombre,
                                @RequestParam("apellido") String nuevoApellido,
                                @RequestParam("titulo") String nuevoTitulo,
                                @RequestParam("descripcion") String nuevoDescripcion,
                                @RequestParam("imagenPerfil") String nuevoImagenPerfil,
                                @RequestParam("instagramUrl") String nuevoInstagramUrl,
                                @RequestParam("linkedinUrl") String nuevoLinkedinUrl,
                                @RequestParam("linkGitHub") String nuevoLinkGitHub
                                )
    { Persona persona = ipersonaService.findPersona(id);
    persona.setNombre(nuevoNombre);
    persona.setApellido(nuevoApellido);
    persona.setTitulo(nuevoNombre);
    persona.setDescripcion(nuevoDescripcion);
    persona.setImagenPerfil(nuevoImagenPerfil);
    persona.setInstagramUrl(nuevoInstagramUrl);
    persona.setLinkedinUrl(nuevoLinkedinUrl);
    persona.setLinkGitHub(nuevoLinkGitHub);
        
    ipersonaService.savePersona(persona);
    return persona;
    
    }
    
    @GetMapping("/personas/traer/perfil")
    public Persona findPersona(){
        return ipersonaService.findPersona((long)1);
}
}
    


