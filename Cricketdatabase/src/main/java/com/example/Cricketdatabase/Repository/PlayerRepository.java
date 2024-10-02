package com.example.Cricketdatabase.Repository;

import com.example.Cricketdatabase.Model.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player,Long> {

}
