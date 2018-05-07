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
package cn.fanhub.placidium.service.impl;

import cn.fanhub.placidium.repository.BaseRepository;
import cn.fanhub.placidium.service.BaseService;
import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.Serializable;
import java.util.List;

/**
 *
 * @author chengfan
 * @version $Id: BaseServiceImpl.java, v 0.1 2018年05月01日 下午5:52 chengfan Exp $
 */

public class BaseServiceImpl<T, ID extends Serializable> implements BaseService<T, ID> {

    @Autowired
    protected BaseRepository<T, ID> baseRepository;

    /**
     * Save t.
     *
     * @param t the t
     * @return the t
     */
    @Override
    public T save(T t) {
        return baseRepository.save(t);
    }

    /**
     * Save iterable.
     *
     * @param <S>  the type parameter
     * @param iterable the iterable
     * @return the iterable
     */
    @Override
    public <S extends T> Iterable<S> save(Iterable<S> iterable) {
        return baseRepository.save(iterable);
    }

    /**
     * Update t.
     *
     * @param t the t
     * @return the t
     */
    @Override
    public T update(T t) {
        return baseRepository.save(t);
    }

    /**
     * Delete.
     *
     * @param t the t
     */
    @Override
    public void delete(T t) {
        baseRepository.delete(t);
    }


    /**
     * Gets one.
     *
     * @param id the id
     * @return the one
     */
    @Override
    public T getOne(ID id) {
        return baseRepository.findOne(id);
    }

    /**
     * Gets count.
     *
     * @return the count
     */
    @Override
    public long getCount() {
        return baseRepository.count();
    }

    /**
     * Gets all.
     *
     * @return the all
     */
    @Override
    public List<T> getAll() {
        return baseRepository.findAll();
    }

    /**
     * Gets all.
     *
     * @param ids the ids
     * @return the all
     */
    @Override
    public List<T> getAll(List<ID> ids) {
        List<T> list = Lists.newArrayList();
        list.addAll(baseRepository.findAll(ids));
        return list;
    }
}
