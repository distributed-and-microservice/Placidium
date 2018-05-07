/**
 *    Copyright 2018 chengfan(fanhub.cn)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package cn.fanhub.placidium.service;

import java.io.Serializable;
import java.util.List;

/**
 *
 * @author chengfan
 * @version $Id: BaseService.java, v 0.1 2018年05月01日 下午5:50 chengfan Exp $
 */
public interface BaseService<T, ID extends Serializable>{
    /**
     * Save t.
     *
     * @param t the t
     * @return the t
     */
    T save(T t);

    /**
     * Save iterable.
     *
     * @param <S>  the type parameter
     * @param iterable the iterable
     * @return the iterable
     */
    <S extends T> Iterable<S> save(Iterable<S> iterable);

    /**
     * Update t.
     *
     * @param t the t
     * @return the t
     */
    T update(T t);

    /**
     * Delete.
     *
     * @param t the t
     */
    void delete(T t);


    /**
     * Gets one.
     *
     * @param id the id
     * @return the one
     */
    T getOne(ID id);

    /**
     * Gets count.
     *
     * @return the count
     */
    long getCount();

    /**
     * Gets all.
     *
     * @return the all
     */
    List<T> getAll();

    /**
     * Gets all.
     *
     * @param ids the ids
     * @return the all
     */
    List<T> getAll(List<ID> ids);


}