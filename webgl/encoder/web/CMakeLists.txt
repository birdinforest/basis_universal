# Build for web

cmake_minimum_required(VERSION 3.0)

project(basisu_js)

if (EMSCRIPTEN)
  set(CMAKE_CXX_STANDARD 11)

  add_executable(basisu.js
    ../../../transcoder/basisu_transcoder.cpp
    ../../../basisu_backend.cpp
    ../../../basisu_basis_file.cpp
    ../../../basisu_comp.cpp
    ../../../basisu_enc.cpp
    ../../../basisu_etc.cpp
    ../../../basisu_frontend.cpp
    ../../../basisu_global_selector_palette_helpers.cpp
    ../../../basisu_gpu_texture.cpp
    ../../../basisu_pvrtc1_4.cpp
    ../../../basisu_resampler.cpp
    ../../../basisu_resample_filters.cpp
    ../../../basisu_ssim.cpp
    ../../../basisu_tool.cpp
    ../../../basisu_astc_decomp.cpp
    ../../../basisu_uastc_enc.cpp
    ../../../basisu_bc7enc.cpp
    ../../../jpgd.cpp
    ../../../lodepng.cpp
    ../../../apg_bmp.c
  )

  target_compile_definitions(basisu.js PRIVATE NDEBUG)
  target_compile_options(basisu.js PRIVATE -O3)
  target_include_directories(basisu.js PRIVATE ../../../ ../../../transcoder)

  # Only set -std=c++11 flag to cpp. Because there is c file, we don't set this flag in target properties.
  set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11")

  # All possible flags:
  #
  #   LINK_FLAGS:
  #     Add 'FS' and 'callMain' into extra exported list. Be noted that there is no space between elements.
  #     ASSERTIONS=1 to get debug info.
  #     MODULARIZE=1 export module by returning a promise.
  #     EXIT_RUNTIME=1. FIXME: Do we need this?
  #     NODERAWFS=1 operate nodejs file system API: https://github.com/emscripten-core/emscripten/blob/master/src/settings.js#L846
  #
  #   COMPILE_FLAGS:
  #     "-pthread". Enable multiple threads: https://emscripten.org/docs/porting/pthreads.html
  set_target_properties(basisu.js PROPERTIES
      OUTPUT_NAME "basisu"
      SUFFIX ".js"
      LINK_FLAGS "-s EXTRA_EXPORTED_RUNTIME_METHODS=['FS','callMain'] -s ALLOW_MEMORY_GROWTH=1 -O3 -s ASSERTIONS=1 -s MALLOC=emmalloc -s MODULARIZE=1 -s EXPORT_NAME=basisu -s INVOKE_RUN=0 -s BINARYEN_TRAP_MODE='clamp' -s EXIT_RUNTIME=1"
      COMPILE_FLAGS "-fvisibility=hidden -fvisibility-inlines-hidden -fPIC -fno-strict-aliasing -D_LARGEFILE64_SOURCE=1 -D_FILE_OFFSET_BITS=64 -Wall -Wextra -Wno-unused-local-typedefs -Wno-unused-value -Wno-unused-parameter -Wno-unused-variable -Wno-reorder")
endif()