package com.example.Cricketdatabase.Repository;

import com.example.Cricketdatabase.Model.Match;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

import static org.hibernate.sql.ast.Clause.SELECT;

public interface MatchRepository extends JpaRepository<Match,Long> {

}