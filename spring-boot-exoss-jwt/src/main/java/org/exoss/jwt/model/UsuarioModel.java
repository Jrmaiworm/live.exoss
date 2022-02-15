package org.exoss.jwt.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="usuario")
public class UsuarioModel {

    @Id
    @Column(unique = true)
    private String id_usuario;
   
    @Column(unique = true)
    private String login;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(unique = false)
    private String password;
   
    public UsuarioModel(String id_usuario, String login, String password) {
		super();
		this.id_usuario = id_usuario;
		this.login = login;
		this.password = password;
	}

	public String getId_usuario() {
		return id_usuario;
	}

	public void setId_usuario(String id_usuario) {
		this.id_usuario = id_usuario;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public UsuarioModel() {
  		super();
  		// TODO Auto-generated constructor stub
      }
	
}