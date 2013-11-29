---
layout: page-full-width
---

# vmtkScripts reference

| Script | Description |
|:--|:--|
| [vmtkactivetubes](/VmtkScripts/vmtkactivetubes) | |
| [vmtkbifurcationprofiles](/VmtkScripts/vmtkbifurcationprofiles) | compute bifurcation profiles, i.e. the bifurcation splitting lines. The script takes in input the surface and the relative centerlines, both already split into branches. |
| [vmtkbifurcationreferencesystems](/VmtkScripts/vmtkbifurcationreferencesystems) | compute reference systems for each bifurcation of a tree. The script takes in input the centerlines already split into branches. |
| [vmtkbifurcationsections](/VmtkScripts/vmtkbifurcationsections) | compute branch sections located a fixed number of spheres away from each bifurcation. The script takes in input the surface and the relative centerlines, both already split into branches. |
| [vmtkbifurcationvectors](/VmtkScripts/vmtkbifurcationvectors) | . |
| [vmtkboundarylayer](/VmtkScripts/vmtkboundarylayer) | create a prismatic boundary layer from a surface mesh and a set of vectors defined on the nodes |
| [vmtkboundarylayer2](/VmtkScripts/vmtkboundarylayer2) | create a prismatic boundary layer from a surface mesh and a set of vectors defined on the nodes |
| [vmtkboundaryreferencesystems](/VmtkScripts/vmtkboundaryreferencesystems) | compute the reference systems relative to each open boundary of a model; a typical use is the specification of boundary conditions for CFD simulations; reference systems are given both as origin and normal, and as origin, a first point defining the x axis with the origin and a second point defining the xy plane with the former two |
| [vmtkbranchclipper](/VmtkScripts/vmtkbranchclipper) | |
| [vmtkbranchextractor](/VmtkScripts/vmtkbranchextractor) | |
| [vmtkbranchgeometry](/VmtkScripts/vmtkbranchgeometry) | compute geometric parameters for each branch of a tree. The script takes in input the centerlines already split into branches. |
| [vmtkbranchmapping](/VmtkScripts/vmtkbranchmapping) | |
| [vmtkbranchmetrics](/VmtkScripts/vmtkbranchmetrics) | |
| [vmtkbranchpatching](/VmtkScripts/vmtkbranchpatching) | |
| [vmtkbranchsections](/VmtkScripts/vmtkbranchsections) | compute geometric properties of branch sections located a fixed number of spheres away from each bifurcation. The script takes in input the surface and the relative centerlines, both already split into branches. |
| [vmtkcenterlineattributes](/VmtkScripts/vmtkcenterlineattributes) | compute centerline attributes like abscissa and parallel transport normals; this is a requried step for mapping |
| [vmtkcenterlinegeometry](/VmtkScripts/vmtkcenterlinegeometry) | compute the local geometry of centerlines in terms of curvature and torsion |
| [vmtkcenterlineinterpolation](/VmtkScripts/vmtkcenterlineinterpolation) | smooth centerlines with a moving average filter |
| [vmtkcenterlinelabeler](/VmtkScripts/vmtkcenterlinelabeler) | |
| [vmtkcenterlinemerge](/VmtkScripts/vmtkcenterlinemerge) | merge centerline tracts belonging to the same groups |
| [vmtkcenterlinemeshsections](/VmtkScripts/vmtkcenterlinemeshsections) | extract mesh sections along centerlines. The script takes in input the mesh and the relative centerlines. |
| [vmtkcenterlinemodeller](/VmtkScripts/vmtkcenterlinemodeller) | converts a centerline to an image containing the tube function |
| [vmtkcenterlineoffsetattributes](/VmtkScripts/vmtkcenterlineoffsetattributes) | offset centerline attributes relative to a bifurcation reference system, in such a way that the abscissa of the closest point the the origin is zero, and the centerline normal at that point coincides with the bifurcation reference system normal |
| [vmtkcenterlineresampling](/VmtkScripts/vmtkcenterlineresampling) | resample input centerlines with a spline filter |
| [vmtkcenterlines](/VmtkScripts/vmtkcenterlines) | compute centerlines from a branching tubular surface (see papers for details); seed points can be interactively selected on the surface, or specified as the barycenters of the open boundaries of the surface; if vmtk is compiled with support for TetGen, TetGen can be employed to compute the Delaunay tessellation of the input points |
| [vmtkcenterlinesections](/VmtkScripts/vmtkcenterlinesections) | compute geometric properties of sections located along centerlines. The script takes in input the surface and the relative centerlines. |
| [vmtkcenterlinesmoothing](/VmtkScripts/vmtkcenterlinesmoothing) | smooth centerlines with a moving average filter |
| [vmtkcenterlineviewer](/VmtkScripts/vmtkcenterlineviewer) | |
| [vmtkdelaunayvoronoi](/VmtkScripts/vmtkdelaunayvoronoi) | |
| [vmtkdijkstradistancetopoints](/VmtkScripts/vmtkdijkstradistancetopoints) | |
| [vmtkdistancetocenterlines](/VmtkScripts/vmtkdistancetocenterlines) | |
| [vmtkdistancetospheres](/VmtkScripts/vmtkdistancetospheres) | |
| [vmtkendpointextractor](/VmtkScripts/vmtkendpointextractor) | |
| [vmtkentityrenumber](/VmtkScripts/vmtkentityrenumber) | Renumber cell entity id array. |
| [vmtkflowextensions](/VmtkScripts/vmtkflowextensions) | |
| [vmtkgeodesicsurfaceresolution](/VmtkScripts/vmtkgeodesicsurfaceresolution) | |
| [vmtkicpregistration](/VmtkScripts/vmtkicpregistration) | register a surface to a reference surface using the ICP algorithm |
| [vmtkimagecast](/VmtkScripts/vmtkimagecast) | cast an image to a specified type |
| [vmtkimagecompare](/VmtkScripts/vmtkimagecompare) | compares an image against a reference |
| [vmtkimagecompose](/VmtkScripts/vmtkimagecompose) | compose an image based on user-specified parameters or on a reference image |
| [vmtkimagecurvedmpr](/VmtkScripts/vmtkimagecurvedmpr) | Make an MPR image from a centerline and an input image |
| [vmtkimagefeaturecorrection](/VmtkScripts/vmtkimagefeaturecorrection) | correct a feature image (e.g. remove influence of bone and/or air from CT-based feature images) |
| [vmtkimagefeatures](/VmtkScripts/vmtkimagefeatures) | compute a feature image for use in segmentation |
| [vmtkimageinitialization](/VmtkScripts/vmtkimageinitialization) | |
| [vmtkimagelinetracer](/VmtkScripts/vmtkimagelinetracer) | interactively trace lines on 3D images; press n and p to move to the next and previous slice, respectively |
| [vmtkimagemipviewer](/VmtkScripts/vmtkimagemipviewer) | display a 3D image |
| [vmtkimagemorphology](/VmtkScripts/vmtkimagemorphology) | apply binary or grayscale morphology filter to the input image |
| [vmtkimagenormalize](/VmtkScripts/vmtkimagenormalize) | automatically label an image using multiple Otsu thresholding |
| [vmtkimageobjectenhancement](/VmtkScripts/vmtkimageobjectenhancement) | compute a feature image for use in segmentation |
| [vmtkimageotsuthresholds](/VmtkScripts/vmtkimageotsuthresholds) | automatically label an image using multiple Otsu thresholding |
| [vmtkimagereader](/VmtkScripts/vmtkimagereader) | read an image and stores it in a vtkImageData object |
| [vmtkimagereslice](/VmtkScripts/vmtkimagereslice) | reslice an image based on user-specified parameters or on a reference image |
| [vmtkimageseeder](/VmtkScripts/vmtkimageseeder) | interactively place seeds in a 3D image |
| [vmtkimageshiftscale](/VmtkScripts/vmtkimageshiftscale) | shift and scale the intensity of an image and cast it to a specified type |
| [vmtkimagesmoothing](/VmtkScripts/vmtkimagesmoothing) | smooth an image with a Gaussian kernel |
| [vmtkimagevesselenhancement](/VmtkScripts/vmtkimagevesselenhancement) | compute a feature image for use in segmentation |
| [vmtkimageviewer](/VmtkScripts/vmtkimageviewer) | display a 3D image |
| [vmtkimagevoipainter](/VmtkScripts/vmtkimagevoipainter) | fill a cubical region of an image with a given gray level |
| [vmtkimagevoiselector](/VmtkScripts/vmtkimagevoiselector) | select a cubical volume of interest and get rid of the rest of the image |
| [vmtkimagewriter](/VmtkScripts/vmtkimagewriter) | write an image to disk |
| [vmtklevelsetsegmentation](/VmtkScripts/vmtklevelsetsegmentation) | |
| [vmtklineartoquadratic](/VmtkScripts/vmtklineartoquadratic) | convert the elements of a mesh from linear to quadratic |
| [vmtklineresampling](/VmtkScripts/vmtklineresampling) | resample input lines with a spline filter |
| [vmtklocalgeometry](/VmtkScripts/vmtklocalgeometry) | |
| [vmtkmarchingcubes](/VmtkScripts/vmtkmarchingcubes) | generate an isosurface of given level from a 3D image |
| [vmtkmeshaddexternallayer](/VmtkScripts/vmtkmeshaddexternallayer) | |
| [vmtkmesharrayoperation](/VmtkScripts/vmtkmesharrayoperation) | perform an operation between arrays of two meshes and store result in the first mesh |
| [vmtkmeshboundaryinspector](/VmtkScripts/vmtkmeshboundaryinspector) | |
| [vmtkmeshbranchclipper](/VmtkScripts/vmtkmeshbranchclipper) | |
| [vmtkmeshclipcenterlines](/VmtkScripts/vmtkmeshclipcenterlines) | interactively clip a mesh using the distance to centerlines |
| [vmtkmeshclipper](/VmtkScripts/vmtkmeshclipper) | interactively clip a mesh with a box |
| [vmtkmeshcompare](/VmtkScripts/vmtkmeshcompare) | compares a mesh against a reference |
| [vmtkmeshconnectivity](/VmtkScripts/vmtkmeshconnectivity) | extract the largest connected region or the closest point-connected region from a mesh |
| [vmtkmeshdatareader](/VmtkScripts/vmtkmeshdatareader) | read data associated with a mesh |
| [vmtkmeshgenerator](/VmtkScripts/vmtkmeshgenerator) | generate a mesh suitable for CFD from a surface |
| [vmtkmeshlambda2](/VmtkScripts/vmtkmeshlambda2) | compute lambda2 from a velocity field |
| [vmtkmeshlinearize](/VmtkScripts/vmtkmeshlinearize) | convert the elements of a mesh to linear |
| [vmtkmeshmerge](/VmtkScripts/vmtkmeshmerge) | Merge two or three meshes into one. |
| [vmtkmeshpolyballevaluation](/VmtkScripts/vmtkmeshpolyballevaluation) | evaluate the polyball function on the vertices of a mesh. |
| [vmtkmeshprojection](/VmtkScripts/vmtkmeshprojection) | interpolates the point data of a reference mesh onto the input mesh |
| [vmtkmeshreader](/VmtkScripts/vmtkmeshreader) | read a mesh and stores it in a vtkUnstructuredGrid object |
| [vmtkmeshscaling](/VmtkScripts/vmtkmeshscaling) | scale a mesh by an isotropic factor |
| [vmtkmeshtetrahedralize](/VmtkScripts/vmtkmeshtetrahedralize) | convert the elements of a mesh to linear |
| [vmtkmeshtetrahedralize2](/VmtkScripts/vmtkmeshtetrahedralize2) | convert the elements of a mesh to linear |
| [vmtkmeshtosurface](/VmtkScripts/vmtkmeshtosurface) | convert a mesh to a surface by throwing out volume elements and (optionally) the relative points |
| [vmtkmeshtransform](/VmtkScripts/vmtkmeshtransform) | transform a mesh with a provided matrix |
| [vmtkmeshtransformtoras](/VmtkScripts/vmtkmeshtransformtoras) | transform a mesh generated in XYZ image space into RAS space |
| [vmtkmeshvectorfromcomponents](/VmtkScripts/vmtkmeshvectorfromcomponents) | create a vector array from a number of scalar arrays treated as vector components |
| [vmtkmeshviewer](/VmtkScripts/vmtkmeshviewer) | display a mesh |
| [vmtkmeshviewer2](/VmtkScripts/vmtkmeshviewer2) | |
| [vmtkmeshvolume](/VmtkScripts/vmtkmeshvolume) | computes the volume of a mesh |
| [vmtkmeshvorticityhelicity](/VmtkScripts/vmtkmeshvorticityhelicity) | compute vorticity and helicity from a velocity field |
| [vmtkmeshwallshearrate](/VmtkScripts/vmtkmeshwallshearrate) | compute wall shear rate from a velocity field, producing a surface in output |
| [vmtkmeshwriter](/VmtkScripts/vmtkmeshwriter) | write a mesh to disk |
| [vmtkmeshwriter2](/VmtkScripts/vmtkmeshwriter2) | write a mesh to disk |
| [vmtknetworkeditor](/VmtkScripts/vmtknetworkeditor) | |
| [vmtknetworkextraction](/VmtkScripts/vmtknetworkextraction) | extract a network of approximated centerlines from a surface, the surface must have at least an opening |
| [vmtknetworkwriter](/VmtkScripts/vmtknetworkwriter) | write network to disk |
| [vmtkpointsplitextractor](/VmtkScripts/vmtkpointsplitextractor) | |
| [vmtkpointtransform](/VmtkScripts/vmtkpointtransform) | transform points with a provided matrix |
| [vmtkpolyballmodeller](/VmtkScripts/vmtkpolyballmodeller) | converts a polyball to an image containing the tube function |
| [vmtkpotentialfit](/VmtkScripts/vmtkpotentialfit) | |
| [vmtkpythonscript](/VmtkScripts/vmtkpythonscript) | execute a python script contained in a file |
| [vmtkrbfinterpolation](/VmtkScripts/vmtkrbfinterpolation) | perform RBF interpolation from a set of seeds |
| [vmtkrenderer](/VmtkScripts/vmtkrenderer) | renderer used to make several viewers use the same rendering window |
| [vmtkrendertoimage](/VmtkScripts/vmtkrendertoimage) | takes a renderer in input and saves the rendering into an image file |
| [vmtksurfaceappend](/VmtkScripts/vmtksurfaceappend) | append two surfaces into a single vtkPolyData. The script does not merge coincident points, consider using vmtksurfacetriangle for this. |
| [vmtksurfacearrayoperation](/VmtkScripts/vmtksurfacearrayoperation) | perform an operation between arrays of two surfaces and store result in the first surface |
| [vmtksurfacebooleanoperation](/VmtkScripts/vmtksurfacebooleanoperation) | perform a boolean operation between two surfaces |
| [vmtksurfacecapper](/VmtkScripts/vmtksurfacecapper) | add caps to the holes of a surface, assigning an id to each cap for easy specification of boundary conditions ("simple" method only). |
| [vmtksurfacecelldatatopointdata](/VmtkScripts/vmtksurfacecelldatatopointdata) | convert cell data arrays to point data surface arrays |
| [vmtksurfacecenterlineprojection](/VmtkScripts/vmtksurfacecenterlineprojection) | |
| [vmtksurfaceclipper](/VmtkScripts/vmtksurfaceclipper) | interactively clip a surface with a box |
| [vmtksurfacecompare](/VmtkScripts/vmtksurfacecompare) | compares a surface against a baseline |
| [vmtksurfaceconnectivity](/VmtkScripts/vmtksurfaceconnectivity) | extract the largest connected region, the closest point-connected region or the scalar-connected region from a surface |
| [vmtksurfacecurvature](/VmtkScripts/vmtksurfacecurvature) | compute curvature of an input surface, optionally reporting results back to a reference surface (by point id) |
| [vmtksurfacedecimation](/VmtkScripts/vmtksurfacedecimation) | reduce the number of triangles in a surface |
| [vmtksurfacedistance](/VmtkScripts/vmtksurfacedistance) | compute the pointwise minimum distance of the input surface from a reference surface |
| [vmtksurfaceextractannularwalls](/VmtkScripts/vmtksurfaceextractannularwalls) | Extract wall surfaces from an annular-cylindric surface. |
| [vmtksurfaceextractinnercylinder](/VmtkScripts/vmtksurfaceextractinnercylinder) | Extract inner surface from an annular-cylindric volume. |
| [vmtksurfacekiteremoval](/VmtkScripts/vmtksurfacekiteremoval) | remove small kites in a surface mesh to avoid Taubin smoothing artifacts |
| [vmtksurfacemassproperties](/VmtkScripts/vmtksurfacemassproperties) | compute the volume of a closed surface. |
| [vmtksurfacemodeller](/VmtkScripts/vmtksurfacemodeller) | converts a surface to an image containing the signed distance transform from the surface points |
| [vmtksurfacenormals](/VmtkScripts/vmtksurfacenormals) | compute normals to a surface |
| [vmtksurfacepointdatatocelldata](/VmtkScripts/vmtksurfacepointdatatocelldata) | convert point data arrays to cell data surface arrays |
| [vmtksurfacepolyballevaluation](/VmtkScripts/vmtksurfacepolyballevaluation) | evaluate the polyball function on the vertices of a surface. |
| [vmtksurfaceprojection](/VmtkScripts/vmtksurfaceprojection) | interpolates the point data of a reference surface onto the input surface based on minimum distance criterion |
| [vmtksurfacereader](/VmtkScripts/vmtksurfacereader) | read a surface and store it in a vtkPolyData object |
| [vmtksurfacereferencesystemtransform](/VmtkScripts/vmtksurfacereferencesystemtransform) | translate and rotate a surface in order to orient its reference system with a target reference system |
| [vmtksurfaceregiondrawing](/VmtkScripts/vmtksurfaceregiondrawing) | draw a closed contour on a surface and generate a distance field on the surface |
| [vmtksurfaceremeshing](/VmtkScripts/vmtksurfaceremeshing) | remesh a surface using quality triangles |
| [vmtksurfaceresolution](/VmtkScripts/vmtksurfaceresolution) | |
| [vmtksurfacescaling](/VmtkScripts/vmtksurfacescaling) | scale a surface by an isotropic factor, or x,y,z directions by separate factors |
| [vmtksurfacesmoothing](/VmtkScripts/vmtksurfacesmoothing) | smooth a surface using Taubin's algorithm |
| [vmtksurfacesubdivision](/VmtkScripts/vmtksurfacesubdivision) | subdivide a triangulated surface |
| [vmtksurfacetomesh](/VmtkScripts/vmtksurfacetomesh) | convert surface to a mesh |
| [vmtksurfacetransform](/VmtkScripts/vmtksurfacetransform) | transform a surface with a provided matrix |
| [vmtksurfacetransforminteractive](/VmtkScripts/vmtksurfacetransforminteractive) | interactively transform a surface to another surface |
| [vmtksurfacetransformtoras](/VmtkScripts/vmtksurfacetransformtoras) | transform a surface generated in XYZ image space into RAS space |
| [vmtksurfacetriangle](/VmtkScripts/vmtksurfacetriangle) | convert all cells in a surface to linear triangles. |
| [vmtksurfaceviewer](/VmtkScripts/vmtksurfaceviewer) | display a surface |
| [vmtksurfacewriter](/VmtkScripts/vmtksurfacewriter) | write surface to disk |
| [vmtksurfacewriter2](/VmtkScripts/vmtksurfacewriter2) | write surface to disk |
| [vmtksurfmesh](/VmtkScripts/vmtksurfmesh) | wrapper around surfmesh surface mesh generator by Gordan Stuhne |
| [vmtktetgen](/VmtkScripts/vmtktetgen) | wrapper around TetGen tetrahedral mesh generator by Hang Si (http://tetgen.berlios.de/) |
| [vmtktetringenerator](/VmtkScripts/vmtktetringenerator) | generate input files for the newtetr CFD solver |
| [vmtkthreshold](/VmtkScripts/vmtkthreshold) | Extract part of surface or mesh with cell entitiy ids between given thresholds. |
