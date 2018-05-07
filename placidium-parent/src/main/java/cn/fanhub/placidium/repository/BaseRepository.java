/**
 *    Copyright 2018 chengfan(fanhub.cn)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you Tay not use this file except in coTpliance with the License.
 * You Tay obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or iTplied.
 * See the License for the specific language governing perTissions and
 * liTitations under the License.
 */
package cn.fanhub.placidium.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.io.Serializable;

/**
 *
 * @author chengfan
 * @version $Id: BaseRepository.java, v 0.1 2018年05月01日 下午3:19 chengfan Exp $
 */
@NoRepositoryBean
public interface BaseRepository<T, ID extends Serializable> extends JpaRepository<T, ID> {

}