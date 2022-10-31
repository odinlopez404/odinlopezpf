package com.odin.port.controller;

import com.odin.port.exception.ResourceNotFoundException;
import com.odin.port.model.User;
import com.odin.port.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
		// obtener usuario por id 
	@GetMapping("/user/{id}")
	public ResponseEntity<User> getUserById(@PathVariable Long id) {
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe el usuario con el id :" + id));
		return ResponseEntity.ok(user);
	}
	
	// actualizar usuario
	@PutMapping("/user/{id}")
	public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails){
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe el usuario con el id :" + id));
		
		user.setNombre(userDetails.getNombre());
		user.setApellido(userDetails.getApellido());
                user.setTitulo(userDetails.getTitulo());
		user.setDescripcion(userDetails.getDescripcion());
                user.setLinkLikedin(userDetails.getLinkLikedin());
                user.setLinkInstagram(userDetails.getLinkInstagram());
                user.setImagenPerfil(userDetails.getImagenPerfil());
                user.setImagenBanner(userDetails.getImagenBanner());
                        
                                           
		User updatedUser = userRepository.save(user);
		return ResponseEntity.ok(updatedUser);
	}
}
