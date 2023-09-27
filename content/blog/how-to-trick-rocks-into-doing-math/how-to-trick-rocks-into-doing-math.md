---
title: How to trick rocks into doing math
description: This is a post on My Blog about product design.
date: 2020-07-07
tags:
  - writing exercise
  - cpu
  - product design
---

_Or_, how CPUs are made.

### Computer-Aided Design (CAD)

The first step of designing a CPU is to select an instruction set and execution paradigm (referred to as the micro-architecture of the CPU). The micro-architecture is selected for a specific application (for example, general-purpose consumer use, enterprise-grade, scientific computing, or embedded system) and a suitable performance level.

The implementation logic of the CPU is constructed by abstract specification of desired circuit behavior
through the selection of appropriate components e.g. Arithmetic Logic Units (ALU), registers, and cache memory and clocks.
The CAD software translates these specifications into the required circuits, logic devices, and logic gates and ultimately the transistors that make them. These elements are printed, in layers, to a silicone wafer between 0.5mm and 400 microns in thickness. The design is also analyzed and simulated to assess manufacturability and design integrity.

### Masking and Fabrication

Manufacturing transistors, at the required scale and precision the achieve the modern CPU performance levels, is not possible with typical manufacturing processes. Even the most precise 3D printers are not suitable for the nano-metre scale of today’s chips. Photolithography is a multi-step process of using light to print or etch the design of many chips onto a thin silicon wafer.

The printing process begins in a sterile environment by applying hydrogen peroxide to a substrate to remove any contaminants. A thin layer of silicon is deposited on the substrate and spun to uniformly cover it in another layer of photo-resistant chemical which is then baked into place. This layer is less than 2 micro-metres thick. A photo mask of the chip design is placed above the wafer and an extreme intensity UV light source is focused through it. This projects an image of the design that exposes and chemically alters the photoresist where the light reaches it. The photoresist is then treated to develop the exposed regions, preventing further light-induced alteration, and washed away from the unexposed regions. A chemical is used to remove the uppermost layer of the substrate not covered by the photoresist mask, etching the design into the wafer. The photoresist is removed, the surface is polished, and the process is repeated in as many layers as needed to complete the chip design.

## Packaging

The delicate silicone die added to a carrier is attached to the printed circuit board (PCB) allowing it to connect, via a pin and socket, to the rest of the computer system. A heat-spreading component is mounted on top to transfer heat away from the circuits.

## Testing and Binning

CPUs are very complex and rely on an incredible level of precision on a microscopic scale. A lot of effort is put into avoiding defects but when they do occur, binning is used to mitigate waste. If the defect occurs in a redundant or non-essential component of the CPU like a core, that component is disabled and the CPU is sold as a lower-end part.

The CPUs are then packaged for retail to customers or sold to OEMs for inclusion in their products.
