package org.exoss.jwt.repository;

import org.exoss.jwt.model.UsuarioModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<UsuarioModel, String> {

    public Optional<UsuarioModel> findByLogin(String login);

}
