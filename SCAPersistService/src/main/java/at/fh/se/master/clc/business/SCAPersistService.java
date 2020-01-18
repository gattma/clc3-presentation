package at.fh.se.master.clc.business;

import at.fh.se.master.clc.domain.SCAModel;
import org.slf4j.Logger;

import javax.enterprise.context.Dependent;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Dependent
public class SCAPersistService {

    @Inject
    private Logger LOG;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void persist(SCAModel entity) {
        entity.persist();
        LOG.debug("successfully persisted new entity.");
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<SCAModel> findAllForUser(@PathParam("id") String id) {
        List<SCAModel> res = SCAModel.find("userId", id).list();
        LOG.debug("found {} entries with id = {}.", res.size(), id);
        return res;
    }


}
