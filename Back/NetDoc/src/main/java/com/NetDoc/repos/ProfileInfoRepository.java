package com.NetDoc.repos;

import com.NetDoc.entity.ProfileInfoEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileInfoRepository extends CrudRepository<ProfileInfoEntity, Long> {
}

