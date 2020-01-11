package at.fh.se.master.clc.rest;

import at.fh.se.master.clc.domain.SCAModel;
import org.slf4j.Logger;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/model")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class SCAPersistResource {

    @Inject
    private Logger LOG;

    @GET
    @Path("/health")
    @Produces(MediaType.TEXT_PLAIN)
    public String health() {
        LOG.debug("SCAPersistResource.health()");
        return "OK";
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response persist(SCAModel entity) {
        LOG.debug("SCAPersistResource.persist({})", entity);
        entity.persist();
        return Response.ok().build();
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll(@PathParam("id") String id) {
        LOG.debug("SCAPersistResource.getAll() with id {}", id);
        List<SCAModel> res = SCAModel.find("userId", id).list();
        return Response.ok(res).build();
    }
}