package com.example.Cricketdatabase.Repository;

import com.example.Cricketdatabase.Model.Result;
import org.hibernate.type.descriptor.converter.spi.JpaAttributeConverter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResultRepository extends JpaRepository<Result,Long> {
}
