A webassembly cmake file to work on web.

From: https://github.com/BinomialLLC/basis_universal/pull/84

Build Failed.

# log:
```
~/projects/basis_universal/webgl/encoder/build(master*) » emcmake cmake ../                              2 ↵ forrrest@192-168-1-100
-- Configuring done
-- Generating done
-- Build files have been written to: /Users/forrrest/projects/basis_universal/webgl/encoder/build
------------------------------------------------------------------------------------------------------------------------------------
~/projects/basis_universal/webgl/encoder/build(master*) » make -s ERROR_ON_UNDEFINED_SYMBOLS=0               forrrest@192-168-1-100
Scanning dependencies of target basisu.js
[  5%] Building CXX object CMakeFiles/basisu.js.dir/Users/forrrest/projects/basis_universal/transcoder/basisu_transcoder.cpp.o
[ 11%] Building CXX object CMakeFiles/basisu.js.dir/Users/forrrest/projects/basis_universal/basisu_backend.cpp.o
[ 17%] Building CXX object CMakeFiles/basisu.js.dir/Users/forrrest/projects/basis_universal/basisu_basis_file.cpp.o
[ 23%] Building CXX object CMakeFiles/basisu.js.dir/Users/forrrest/projects/basis_universal/basisu_comp.cpp.o
[ 29%] Building CXX object CMakeFiles/basisu.js.dir/Users/forrrest/projects/basis_universal/basisu_enc.cpp.o
/Users/forrrest/projects/basis_universal/basisu_enc.cpp:251:26: warning: comparison of integers of different signs: 'int' and
      'const uint32_t' (aka 'const unsigned int') [-Wsign-compare]
                        if ((w * h * n_chans) > MAX_32BIT_ALLOC_SIZE)
                             ~~~~~~~~~~~~~~~  ^ ~~~~~~~~~~~~~~~~~~~~
1 warning generated.
[ 35%] Building CXX object CMakeFiles/basisu.js.dir/Users/forrrest/projects/basis_universal/basisu_etc.cpp.o
[ 41%] Building CXX object CMakeFiles/basisu.js.dir/Users/forrrest/projects/basis_universal/basisu_frontend.cpp.o
[ 47%] Building CXX object CMakeFiles/basisu.js.dir/Users/forrrest/projects/basis_universal/basisu_global_selector_palette_helpers.cpp.o
[ 52%] Building CXX object CMakeFiles/basisu.js.dir/Users/forrrest/projects/basis_universal/basisu_gpu_texture.cpp.o
[ 58%] Building CXX object CMakeFiles/basisu.js.dir/Users/forrrest/projects/basis_universal/basisu_pvrtc1_4.cpp.o
[ 64%] Building CXX object CMakeFiles/basisu.js.dir/Users/forrrest/projects/basis_universal/basisu_resampler.cpp.o
[ 70%] Building CXX object CMakeFiles/basisu.js.dir/Users/forrrest/projects/basis_universal/basisu_resample_filters.cpp.o
[ 76%] Building CXX object CMakeFiles/basisu.js.dir/Users/forrrest/projects/basis_universal/basisu_ssim.cpp.o
[ 82%] Building CXX object CMakeFiles/basisu.js.dir/Users/forrrest/projects/basis_universal/basisu_tool.cpp.o
[ 88%] Building CXX object CMakeFiles/basisu.js.dir/Users/forrrest/projects/basis_universal/basisu_astc_decomp.cpp.o
/Users/forrrest/projects/basis_universal/basisu_astc_decomp.cpp:55:14: warning: unused function 'inBounds' [-Wunused-function]
        static bool inBounds(int v, int l, int h)
                    ^
/Users/forrrest/projects/basis_universal/basisu_astc_decomp.cpp:60:14: warning: unused function 'inRange' [-Wunused-function]
        static bool inRange(int v, int l, int h)
                    ^
/Users/forrrest/projects/basis_universal/basisu_astc_decomp.cpp:195:14: warning: unused function 'deInBounds32' [-Wunused-function]
        static bool deInBounds32(uint32_t v, uint32_t l, uint32_t h)
                    ^
3 warnings generated.
[ 94%] Building CXX object CMakeFiles/basisu.js.dir/Users/forrrest/projects/basis_universal/lodepng.cpp.o
[100%] Linking CXX executable basisu.js
error: undefined symbol: _ZN4jpgd31decompress_jpeg_image_from_fileEPKcPiS2_S2_ij
warning: To disable errors for undefined symbols use `-s ERROR_ON_UNDEFINED_SYMBOLS=0`
error: undefined symbol: _ZN6basisu12encode_uastcEPKhRN6basist11uastc_blockEj
error: undefined symbol: _ZN6basisu26bc7enc_compress_block_initEv
error: undefined symbol: _ZN6basisu9uastc_rdoEjPN6basist11uastc_blockEPKNS_10color_rgbaERKNS_16uastc_rdo_paramsEjPNS_8job_poolEj
error: undefined symbol: apg_bmp_free
error: undefined symbol: apg_bmp_read
Error: Aborting compilation due to previous errors
shared:ERROR: '/Users/forrrest/emsdk/node/12.9.1_64bit/bin/node /Users/forrrest/emsdk/fastcomp/emscripten/src/compiler.js /var/folders/yc/ls88bzl961v0_4lrwytywjhr0000gn/T/tmpUFLwWf.txt /Users/forrrest/emsdk/fastcomp/emscripten/src/library_pthread_stub.js' failed (1)
make[2]: *** [basisu.js] Error 1
make[1]: *** [CMakeFiles/basisu.js.dir/all] Error 2
make: *** [all] Error 2
```
