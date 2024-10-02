package com.example.Cricketdatabase.Repository;

import com.example.Cricketdatabase.Model.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository extends JpaRepository<Team,Long> {
}
