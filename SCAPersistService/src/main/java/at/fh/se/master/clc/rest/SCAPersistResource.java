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
    @Produces(MediaType.TEXT_PLAIN)
    public String health() {
        LOG.debug("SCAPersistResource.health()");
        return "OK";
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response persist(SCAModel entity) { // TODO user berücksichtigen
        LOG.debug("SCAPersistResource.persist({})", entity);
        entity.persist();
        return Response.ok().build();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll() { // TODO user berücksichtigen
        List<SCAModel> res = SCAModel.listAll();
        return Response.ok(res).build();
    }
}