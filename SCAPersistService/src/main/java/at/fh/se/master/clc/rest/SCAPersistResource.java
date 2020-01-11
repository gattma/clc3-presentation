package at.fh.se.master.clc.rest;

import at.fh.se.master.clc.business.SCAPersistService;
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

    @Inject
    private SCAPersistService service;

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
        service.persist(entity);
        return Response.ok().build();
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response findAllForUser(@PathParam("id") String id) {
        LOG.debug("SCAPersistResource.getAll({})", id);
        return Response.ok(service.findAllForUser(id)).build();
    }
}