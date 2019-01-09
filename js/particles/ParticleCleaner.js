var ParticleCleaner = (function () {
    function ParticleCleaner() {
    }
    ParticleCleaner.prototype.cleanupBlood = function (particles) {
        if (particles.length > WorldConstants.maxBloodParticles) {
            var numParticlesToDelete = particles.length - WorldConstants.maxBloodParticles;
            console.log(numParticlesToDelete);
            for (var i = 0; i < numParticlesToDelete; i++) {
                particles[i].shouldBeDeleted = true;
            }
        }
        for (var i = 0; i < particles.length - 1; i++) {
            if (particles[i].shouldBeDeleted) {
                continue;
            }
            var p1 = particles[i];
            for (var j = i + 1; j < particles.length; j++) {
                var p2 = particles[j];
                var particlesOverlapping = Math.abs(p1.x - p2.x) < 1 && Math.abs(p1.y - p2.y) < 1;
                if (particlesOverlapping && p1.state === BloodParticle.INACTIVE) {
                    p2.shouldBeDeleted = true;
                }
            }
        }
    };
    return ParticleCleaner;
}());
