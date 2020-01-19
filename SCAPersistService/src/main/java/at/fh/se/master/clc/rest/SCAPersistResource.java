package at.fh.se.master.clc.rest;

import at.fh.se.master.clc.business.SCAPersistService;
import at.fh.se.master.clc.domain.SCAModel;
import at.fh.se.master.clc.domain.Simple;
import io.quarkus.runtime.configuration.ProfileManager;
import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.eclipse.microprofile.opentracing.Traced;
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
    @Path("/profile")
    @Produces(MediaType.TEXT_PLAIN)
    public String profile(){
        LOG.debug("SCAPersistService.profile()");
        return ProfileManager.getActiveProfile();
    }

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

    @POST
    @Path("/dummy")
    public Response dummyInsert() {
        LOG.debug("SCAPersistResource.dummyInsert()");
        new Simple().persist();
        return Response.ok().build();
    }

    @GET
    @Path("/dummy")
    @Produces(MediaType.APPLICATION_JSON)
    public Response dummyGet() {
        LOG.debug("SCAPersistResource.dummyGet()");
        return Response.ok(Simple.findAll()).build();
    }
}