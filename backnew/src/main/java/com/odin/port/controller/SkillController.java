package com.odin.port.controller;

import com.odin.port.exception.ResourceNotFoundException;
import com.odin.port.model.Skill;
import com.odin.port.repository.SkillRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/")

public class SkillController {
@Autowired
	private SkillRepository skillRepository;
	
	// obtener todas las skills
	@GetMapping("/skills")
	public List<Skill> getAllSkills(){
		return skillRepository.findAll();
	}	
	
	// crear skill
	@PostMapping("/skills")
	public Skill createSkill(@RequestBody Skill skill) {
		return skillRepository.save(skill);
	}
	
	// obtener skill por id
	@GetMapping("/skills/{id}")
	public ResponseEntity<Skill> getSkillById(@PathVariable Long id) {
		Skill skill = skillRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("La skill no existe:" + id));
		return ResponseEntity.ok(skill);
	}
	
	// actualizar skill por id
	@PutMapping("/skills/{id}")
	public ResponseEntity<Skill> updateSkill(@PathVariable Long id, @RequestBody Skill skillDetails){
		Skill skill = skillRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe skill con el id :" + id));
		
		skill.setNombreSkill(skillDetails.getNombreSkill());
                skill.setPorcentajeSkill(skillDetails.getPorcentajeSkill());

                
		Skill updatedSkill = skillRepository.save(skill);
		return ResponseEntity.ok(updatedSkill);
                
                
	}
	
	// borrar educacion
	@DeleteMapping("/skills/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteSkill(@PathVariable Long id){
		Skill skill = skillRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe el id de skill:" + id));
		
		skillRepository.delete(skill);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
    

